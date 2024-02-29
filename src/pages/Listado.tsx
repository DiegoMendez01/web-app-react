import react from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = () => {
    return(
        <>
            <h1>Pokemon Diego</h1>
            <div className="content-wrapper">
                <div className="content">
                    <div className="row gap-3">
                        <Card className="mx-auto" style={{ width: '18rem' }}>
                        <Card.Header>Tipo: Fantasma</Card.Header>
                        <Card.Img variant="top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif" />
                        <Card.Body>
                            <Card.Title className="text-center">Gengar</Card.Title>
                            <ListGroup>
                                <ListGroup.Item>HP: ##</ListGroup.Item>
                                <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>E. Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>E. Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        </Card>

                        <Card className="mx-auto" style={{ width: '18rem' }}>
                        <Card.Header>Tipo: Fantasma</Card.Header>
                        <Card.Img variant="top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif" />
                        <Card.Body>
                            <Card.Title className="text-center">Haunter</Card.Title>
                            <ListGroup>
                                <ListGroup.Item>HP: ##</ListGroup.Item>
                                <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>E. Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>E. Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        </Card>

                        <Card className="mx-auto" style={{ width: '18rem' }}>
                        <Card.Header>Tipo: Fantasma</Card.Header>
                        <Card.Img variant="top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif" />
                        <Card.Body>
                            <Card.Title className="text-center">Gastly</Card.Title>
                            <ListGroup>
                                <ListGroup.Item>HP: ##</ListGroup.Item>
                                <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>E. Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>E. Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listado;