
import React from 'react'
import *  as Styled from './styles'
import { Input } from '../../components/input/index';
import { TextArea } from '../../components/textArea/index';
import { Modal } from '../../components/modal/index';
import { Buttom } from '../../components/Buttom/button';
import contacts from '../../assets/contacts.svg'
import { Image } from '../../components/Image/index';
import { Text } from '../../components/Text/index';

export const Contact = () => {
	// eslint-disable-next-line no-unused-vars

	function Send() {
		var submitButton = document.getElementById("submit_form");
		var form = document.getElementById("email_form");
		form.addEventListener("submit", function (e) {
			setTimeout(function () {
				submitButton.value = "enviando email...";
				submitButton.disabled = true;
			}, 1);

		})
	}

	return (

		<Styled.ContactContainer>

			<Text as='h1' size='small'> contate-me  </Text>
<Text size='smaller'  >Você pode entrar em contato comigo em qualquer uma das minhas redes sociais. Se você tem um projeto ou proposta em mente, pode me enviar um e-mail :D</Text>
<Styled.Wrapper>



<Image src={contacts} alt='image de contato' />




			<Modal  size='medium' >
				<Styled.FormContainer action="https://postmail.invotes.com/send"
					method="post" id="email_form">

					<label>
						<span> Assunto:</span>
						<Input type="text" name="subject" />  </label>


					<label >
						<span>Menssagem:</span>
						<TextArea name="text"></TextArea>
					</label>



					<Input type="hidden" name="access_token" value="9klay5wvm2ogkdqlh60jnnkk" />


					<Input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
					<Input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />




					<Input type="hidden"
						name="sms_format" value="true" />





						<Buttom  pattern='pattern'   onClick={Send}>
							enviar
						</Buttom>

{/*
					<Input onclick={Send} id="submit_form" type="submit" value="enviar" />
 */}



				</Styled.FormContainer>


			</Modal>
			</Styled.Wrapper>

		</Styled.ContactContainer>
	)
};
