<?php
$host = "localhost"; // Change if needed
$db_name = "snsu_db";
$username = "root"; // Default for XAMPP
$password = ""; // Default for XAMPP

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    exit;
}
?>
