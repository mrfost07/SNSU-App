<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username   = "root";      // change if you use another MySQL user
$password   = "";          // change if you have a MySQL password
$dbname     = "snsu_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "DB connection failed"]));
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['full_name'], $data['email'], $data['password'])) {
    echo json_encode(["success" => false, "message" => "Missing fields"]);
    exit;
}

$full_name = $conn->real_escape_string($data['full_name']);
$email     = $conn->real_escape_string($data['email']);
$password  = password_hash($data['password'], PASSWORD_BCRYPT); // ✅ secure

$sql = "INSERT INTO users (full_name, email, password) VALUES ('$full_name', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Registration successful"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}

$conn->close();
?>
