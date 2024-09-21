import { HomeContainer, Image, TextContainer } from "./styles";
import Foto from "../../assets/foto.jpg"

export function Home() {
    return (
        <HomeContainer>
            <TextContainer>
                 <p>
                    O lixo eletrônico, ou e-lixo, é composto por dispositivos
                    descartados como celulares, computadores e eletrodomésticos.
                    Esses resíduos contêm substâncias tóxicas, como chumbo e 
                    mercúrio, que podem poluir o solo e a água, causando danos 
                    graves à saúde e ao meio ambiente. Para evitar esses impactos,
                    a reciclagem correta é essencial. Por isso, criei este site 
                    para ajudar no descarte consciente de eletrônicos, conectando
                    você a pontos de coleta especializados. Juntos, podemos reduzir
                    os danos ambientais e construir um futuro mais sustentável!
                </p>
            </TextContainer>
            <div>   
                <Image src={Foto} alt=""/>
            </div>

        </HomeContainer>
    )
}