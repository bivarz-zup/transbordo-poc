import Cashback from 'assets/icons/cashback.svg';
import Internet from 'assets/icons/internet.svg';
import Spotify from 'assets/icons/spotify.svg';
import Voice from 'assets/icons/voice.svg';
import Whatsapp from 'assets/icons/whatsapp.svg';
import Facebook from 'assets/images/facebook.png';
import Instagram from 'assets/images/instagram.png';
import { primeMock } from 'mocks/primeMock';
import React from 'react';

import {
	Container,
	DataLine,
	DataLineDailys,
	Description,
	QuantityInformation,
	Title,
} from './view.styles';

export const View = () => {
	return (
		<Container>
			<Title>{primeMock.title}</Title>
			<DataLine>
				{primeMock.benefits.internet ? (
					<Description>
						<img src={Internet} alt="voz" /> Internet
					</Description>
				) : (
					''
				)}

				{primeMock.benefits.internet ? (
					<QuantityInformation>
						{primeMock.benefits.internet.quantity}

						<span>
							{primeMock.benefits.internet.lastRenewal} adquirido
							na última renovação
						</span>
					</QuantityInformation>
				) : (
					''
				)}
			</DataLine>

			<DataLine>
				{primeMock.benefits.voice ? (
					<Description>
						<img src={Voice} alt="internet" /> Voz e SMS
					</Description>
				) : (
					''
				)}

				<QuantityInformation>
					{primeMock.benefits.voice}
				</QuantityInformation>
			</DataLine>

			<DataLine>
				{primeMock.benefits.whatsapp ? (
					<Description>
						<img src={Whatsapp} alt="whatsapp" /> WhatsApp
					</Description>
				) : (
					''
				)}

				<QuantityInformation>
					{primeMock.benefits.whatsapp}
				</QuantityInformation>
			</DataLine>

			<DataLine>
				{primeMock.benefits.spotify ? (
					<Description>
						<img src={Spotify} alt="spotify" /> Spotify
					</Description>
				) : (
					''
				)}

				<QuantityInformation>
					{primeMock.benefits.spotify}
				</QuantityInformation>
			</DataLine>

			<DataLine>
				{primeMock.benefits.cashback ? (
					<Description>
						<img src={Cashback} alt="cashback" /> Cashback
					</Description>
				) : (
					''
				)}

				<QuantityInformation>
					R${primeMock.benefits.cashback.value}
					<span>
						válido até {primeMock.benefits.cashback.expireDate}(
						{primeMock.benefits.cashback.days})
					</span>
				</QuantityInformation>
			</DataLine>

			<DataLineDailys>
				<Description>Próxima renovação</Description>

				<QuantityInformation>
					{primeMock.nextRenewal}
				</QuantityInformation>
			</DataLineDailys>

			<Title>Diárias avulsas</Title>

			<DataLineDailys>
				<Description>
					<img src={Facebook} alt="facebook" />{' '}
					<img src={Instagram} alt="facebook" />
					{primeMock.dailys.app}
				</Description>

				<QuantityInformation>
					{primeMock.dailys.days} diárias
				</QuantityInformation>
			</DataLineDailys>
		</Container>
	);
};
