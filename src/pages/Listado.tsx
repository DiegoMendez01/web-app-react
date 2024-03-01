import react, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importar controlador y modelo
import { getPokemons } from '../controllers/getpokemon';
import { Pokemon } from '../models/pokemon.m';

/*
* Metodo slice() devuelve una copia de una parte del array dentro de un nuevo array
*/
const Listado = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    // Llamar controlador y obtener todos los pokemons
    useEffect(() => {
        const obtenerTodos = async() => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        obtenerTodos();
    });

    return(
        <>
            <h1>Pokemon Diego</h1>
            <div className="content-wrapper">
                <div className="content">
                    <div className="row gap-3">
                        {pokemons?.slice(0, 10).map((pokemons) => (
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Header>Tipo: {pokemons.type}</Card.Header>
                            <Card.Img width="80" height="100" variant="top" src={pokemons.imggif} className="d-block mx-auto w-50" />
                            <Card.Body>
                                <Card.Title className="text-center">{pokemons.name}</Card.Title>
                                <ListGroup>
                                    <ListGroup.Item><b>HP:</b> {pokemons.hp}</ListGroup.Item>
                                    <ListGroup.Item><b>Ataque:</b> {pokemons.attack}</ListGroup.Item>
                                    <ListGroup.Item><b>Defensa:</b> {pokemons.defense}</ListGroup.Item>
                                    <ListGroup.Item><b>E. Ataque:</b> {pokemons.sp_atk}</ListGroup.Item>
                                    <ListGroup.Item><b>E. Defensa:</b> {pokemons.sp_def}</ListGroup.Item>
                                    <ListGroup.Item><b>Velocidad:</b> {pokemons.speed}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listado;