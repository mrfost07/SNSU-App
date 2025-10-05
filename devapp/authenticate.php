<?php
session_start();
if (!isset($_SESSION["user_id"])) {
    echo json_encode(["message" => "Unauthorized access"]);
    exit;
}
?>