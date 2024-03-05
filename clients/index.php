<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Add PUT to the allowed methods
header("Access-Control-Allow-Headers: Content-Type");
header('Access-Control-Allow-Origin: *');

// Allow the following HTTP methods
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

// Allow the following headers in the request
header('Access-Control-Allow-Headers: Content-Type');

// Set the Content-Type header to JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$user = file_get_contents('php://input');

$method = $_SERVER['REQUEST_METHOD'];
$url = $_SERVER['REQUEST_URI'];
switch($method)
{

    case "POST":
        $path = explode('/' , $_SERVER['REQUEST_URI']);
        if ($url === "/clients/clients/save")
        {
            $user = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO clients(id , name , phone , date , email , password) VALUES (null , :name , :phone , :date , :email , :password)";
            $stmt = $conn->prepare($sql);
            $created_at = date('Y-m-d');
            $stmt->bindParam(':name' , $user->name);
            $stmt->bindParam(':phone' , $user->phone);
            $stmt->bindParam(':date' , $created_at);
            $stmt->bindParam(':email' , $user->email);
            $stmt->bindParam(':password' , $user->password);
    
            if($stmt->execute())
            {
                $response = ['status' => 1, 'message' => 'CLIENT CREATED'];
            }
            else{
                $response = ['status' => 0, 'message' => 'FAILED'];
    
            }
        }
        else if($path[2] == 'clients' && $path[3] == 'specific')
        {
            // print_r($path);
            $column = end($path);
            $user = json_decode(file_get_contents('php://input'));
            // print_r($user);
            $sql = "SELECT * FROM clients";
            $stmt = $conn->prepare($sql);
            // $stmt->bindParam(':name' , $user->name);
            $u = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($u);
            if($stmt->execute())
            {
                $response = ['status' => 1, 'message' => 'CLIENT CREATED'];
            }
            else{
                $response = ['status' => 0, 'message' => 'FAILED'];
    
            }

        }
        // else if($url === "/clients/clients/get")
        // {
        //     $user = json_decode(file_get_contents('php://input'));
        //     if($user->name != "" && $user->phone != "")
        //     {
        //         $sql = "SELECT * FROM clients WHERE name = :name AND phone = :phone";
        //         $stmt = $conn->prepare($sql);
        //         $stmt->bindParam(':name' , $user->name);
        //         $stmt->bindParam(':phone' , $user->phone);
        //     }
        //     else if($user->phone == "")
        //     {
        //         $sql = "SELECT * FROM clients WHERE name = :name";
        //         $stmt = $conn->prepare($sql);
        //         $stmt->bindParam(':name' , $user->name);
        //     }
        //     else if($user->name == "")
        //     {
        //         $sql = "SELECT * FROM clients WHERE phone = :phone";
        //         $stmt = $conn->prepare($sql);
        //         $stmt->bindParam(':phone' , $user->phone);
        //     }
        //     else{
        //         $sql = "SELECT * FROM clients";
        //         $stmt = $conn->prepare($sql);
        //     }
        //     $stmt->execute();
        //     $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        //     echo json_encode($users);
        // }
        else if($url === "/clients/clients/get/count")
        {
            $user = json_decode(file_get_contents('php://input'));
            if($user->name != "" && $user->phone != "")
            {
                $sql = "SELECT COUNT(*) FROM clients WHERE name = :name AND phone = :phone";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':name' , $user->name);
                $stmt->bindParam(':phone' , $user->phone);
            }
            else if($user->phone == "")
            {
                $sql = "SELECT COUNT(*) FROM clients WHERE name = :name";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':name' , $user->name);
            }
            else if($user->name == "")
            {
                $sql = "SELECT COUNT(*) FROM clients WHERE phone = :phone";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':phone' , $user->phone);
            }
        }
        break;
//         // else if ($url === "/clients/cases/save") 
//         // {
//         //     $user = json_decode(file_get_contents('php://input'));
//         //     $sql = "INSERT INTO cases(id, type, description, date) VALUES (null, :type, :desc, :date)";
//         //     $stmt = $conn->prepare($sql);
//         //     $created_at = date('Y-m-d');
//         //     $stmt->bindParam(':type', $user->type);
//         //     $stmt->bindParam(':desc', $user->desc);
//         //     $stmt->bindParam(':date', $created_at);
        
//         //     if ($stmt->execute()) {
//         //         $response = ['status' => 1, 'message' => 'CLIENT CREATED'];
//         //     } else {
//         //         $response = ['status' => 0, 'message' => 'FAILED'];
//         //     }
//         // }
//         else{
//             $sql = "SELECT COUNT(*) FROM clients";
//             $stmt = $conn->prepare($sql);
//         }
//         $stmt->execute();
//         $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
//         echo json_encode($users);
//         }

//         break;

case "GET":
    $columnName = isset($_GET['column']) ? $_GET['column'] : '';
    $path = explode('/' , $_SERVER['REQUEST_URI']);
    // print_r($path);
    $columnName = end($path);
    
    if(isset($columnName) && is_numeric($columnName)) {
        $sql = "SELECT * FROM clients WHERE ID = $columnName";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($users);
    }
    
    else if(isset($path[3]) && $path[3] == 'specific')
    {
        $name = end($path);
        $noSpaces = strtr($name, ['%20' => ' ']);
        $att = $path[4];
        $sql = "SELECT $att FROM clients WHERE name = :name";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name' , $noSpaces);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
    }
    else if($path[2] == 'clients' && $path[3] == 'get')
    {
        $sql = "SELECT  * FROM clients";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
    }
        else if($path[2] == 'legalprofessional' && $path[3] == 'get')
        {
            // print_r($path);
            $sql = "SELECT  * FROM LegalProfessional";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($users);
        }
        else if($path[2] == 'clients' && $path[3] == 'nav')
        {
            $email = end($path);
            $sql = "SELECT * FROM clients WHERE email = :email";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email' , $email);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($users);
        }
        else if($path[2] == 'assistants' && $path[3] == 'get')
        {
            $sql = "SELECT  * FROM assistants";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($users);
        }
        else if($path[1] == 'clients' && $path[2] == 'get')
        {
            $sql = "SELECT clients.ID, clients.name, clients.email, clients.phone, cases.ID, cases.description ,cases.status FROM clients JOIN cases ON clients.ID = cases.client_id";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($users);
        }
        else if($path[1] == 'clients' && $path[2] == 'nested')
        {
            $type = end($path);
            $sql = "SELECT *
            FROM clients
            WHERE ID IN (
                SELECT DISTINCT client_id
                FROM cases
                WHERE type = :typee)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':typee' , $type);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            echo json_encode($users);
        }
        else if($path[1] == 'clients' && $path[2] == 'count')
        {
            $sql = "SELECT COUNT(*) AS total_rows
            FROM clients;";

            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($users);
        }
        else if($path[1] == 'clients' && $path[2] == 'max')
        {
            $sql = "SELECT MAX(ID) AS max_id
            FROM clients;";

            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($users);
        }
        else if($path[1] == 'clients' && $path[2] == 'min')
        {
            $sql = "SELECT MIN(ID) AS min_id
            FROM clients;";

            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($users);
        }
        else{
            $sql = "SELECT  $columnName AS dat , ID FROM clients";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($users);
        }
        
        break;

    case "PUT":
        // print_r("sdfs");
        $user = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE clients SET name= :name, email =:email, phone =:phone WHERE ID = :id";
        $stmt = $conn->prepare($sql);
        // $updated_at = date('Y-m-d');
        $stmt->bindParam(':id', $user->ID);
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':phone', $user->phone);
        // $stmt->bindParam(':updated_at', $updated_at);
    
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $columnName = end($path);
        $sql = "DELETE FROM clients WHERE Id = $columnName";
        $stmt = $conn->prepare($sql);
        // $stmt->bindParam(':id', $columnName);
    
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
    
    }