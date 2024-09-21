
import { useEffect, useState } from "react";
import { AddressContainer, LinkA, StyledP } from "./styles";
import axios from "axios";
import { MapPin } from "phosphor-react";

interface AdressProps {
    name: string

    vicinity: string
    
    geometry: {
        location: {
            lat: number
            lng: number
        }
    }
}

export function Address() {

    const apiURL = 'https://api-for-eletronic-recycling.onrender.com/api/enderecos'

    const [address, setAddress] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    useEffect(()=> {
        async function fetchAdress() {
            try {
                const response = await axios.get(apiURL)
                setAddress(response.data)
                setLoading(false)
            } catch (err) {
                setError("Falha ao buscar endereços.")
                setLoading(false)
            }
        }
        fetchAdress();
    }, [])

    if (loading) {
        return <StyledP>Loading...</StyledP>
    }

    if (error) {
        return <StyledP>{error}</StyledP>
    }
    if (address.length == 0) {
        return <StyledP>Nenhum endereço encontrado..</StyledP>
    }

    return (
        <AddressContainer>
            <table>
                {address.map((address: AdressProps, index) => (
                <tbody key={index}>
                    <tr>
                        <td>{address.name}</td>
                        <td>{address.vicinity}</td>
                        <td>
                            <LinkA 
                                href={`https://www.google.com/maps/place/${address.geometry.location.lat},${address.geometry.location.lng}`} 
                                target="_blank"
                            >
                                <MapPin size={'3.5vw'}/>
                            </LinkA>
                        </td>
                    </tr>
                </tbody>
                ))}
            </table>
        </AddressContainer>
    )
}