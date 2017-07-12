<?php

$mailMessage = null;

if (count($_POST))
			{
				////////// USTAWIENIA //////////
				$email = 'myjniabukownica@gmail.com';	// Adres e-mail adresata
				$subject = 'Zapytanie o usługę detailingu';	// Temat listu
				$message = 'Wiadomość została wysłana!';	// Komunikat
				$error = 'Wystąpił błąd podczas wysyłania formularza';	// Komunikat błędu
				$charset = 'UTF-8';	// Strona kodowa
				//////////////////////////////
				$head =
					"MIME-Version: 1.0\r\n" .
					"Content-Type: text/plain; charset=$charset\r\n" .
					"Content-Transfer-Encoding: 8bit";
				$body = '';
				foreach ($_POST as $name => $value)
				{
					if (is_array($value))
					{
						for ($i = 0; $i < count($value); $i++)
						{
							$body .= "$name=" . (get_magic_quotes_gpc() ? stripslashes($value[$i]) : $value[$i]) . "\r\n";
						}
					}
					else $body .= "$name=" . (get_magic_quotes_gpc() ? stripslashes($value) : $value) . "\r\n";
				}
  
				$mailMessage =  mail($email, "=?$charset?B?" . base64_encode($subject) . "?=", $body, $head) ? $message : $error;
			}