<?php

$host = 'localhost';
$db = 'panaderia';
$user = 'Luis';
$password = 'euge210877'; 

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    die("Error 500 " . $conn->connect_error);
}

$panes = [
    ['nombre' => 'Pan de Muerto con Chispas de Chocolate', 'precio' => 35.00, 'input' => 'CP'],
    ['nombre' => 'Pan de Muerto de Naranja', 'precio' => 35.00, 'input' => 'N'],
    ['nombre' => 'Dona de Chocolate', 'precio' => 20.00, 'input' => 'DC'],
    ['nombre' => 'Concha', 'precio' => 15.00, 'input' => 'cn'],
    ['nombre' => 'Oreja de Azúcar', 'precio' => 15.00, 'input' => 'Muer'],
    ['nombre' => 'Baguette', 'precio' => 12.00, 'input' => 'bg']
];

foreach ($panes as $pan) {
    $cantidad = isset($_GET[$pan['input']]) ? intval($_GET[$pan['input']]) : 0;
    
    if ($cantidad > 0) {
        $nombre_pan = $pan['nombre'];
        $precio = $pan['precio'];
        
        $stmt = $conn->prepare("INSERT INTO compras_pan (nombre_pan, precio, cantidad) VALUES (?, ?, ?)");
        $stmt->bind_param("sdi", $nombre_pan, $precio, $cantidad);
        $stmt->execute();
    }
}

$conn->close();
