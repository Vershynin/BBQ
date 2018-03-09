<?php
if((isset($_POST['firstname']) && !empty($_POST['firstname'])) && (isset($_POST['email']) && !empty($_POST['email'])) && (isset($_POST['your-message']) && !empty($_POST['your-message']))){ //Проверка отправилось ли наше поля name и не пустые ли они
	$to = 'ruslan.vershynin@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
	$subject = 'Запрос на обратный звонок'; //Заголовок сообщения
	$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Name: '.$_POST['firstname'].'</p>
												<p>E-mail: '.$_POST['email'].'</p>
                        <p>Web-site: '.$_POST['website'].'</p>
												<p>Message: '.$_POST['your-message'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	$headers .= "From: Отправитель <sergey@urich.org>\r\n"; //Наименование и почта отправителя
	mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>
