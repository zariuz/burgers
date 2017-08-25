<?php
    $name = $_POST['data-name'];
    $phone = $_POST['data-phone'];
    $street = $_POST['data-street'];
    $home = $_POST['data-home'];
    $hous = $_POST['data-housing'];
    $apart = $_POST['data-apart'];
    $floor = $_POST['data-floor'];
    $comment = $_POST['data-comment'];
    $surrend = $_POST['data-surrender'];
    $call = $_POST['data-callback'];


    if (isset($call) == 1) {
        $call = 'ДА';
    } else $call = 'НЕТ';


    $massage = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Заказ</title>
    </head>
    <body>
        <h1>Ваш заказ</h1>
        <ul>
            <li>Имя '. $name .'</li>
            <li>Телефон '. $phone .'</li>
            <li>Адресс '. $street .'</li>
            <li>Дом ' . $home .'</li>
            <li>Корпус ' . $hous .'</li>
            <li>Квартира ' . $apart .'</li>
            <li>Этаж ' . $floor .'</li>
            <li>Коментарий '. $comment .'</li>
            <li>Оплата '. $surrend .'</li>
            <li>Перезвонить? '. $call .'</li>
        </ul>
    </body>
    </html>
    ';

    mail('nechetov@hotmail.com', 'Заказ', $massage);
    $data = [];


    if ($mail) {
        $data['status'] = 'OK';
        $data['message'] = 'Письмо успешно отправленно';
    } else {
        $data['status'] = 'NO';
        $data['message'] = 'На сервере произошла ошибка';
    }

    echo json_encode($data);

?>