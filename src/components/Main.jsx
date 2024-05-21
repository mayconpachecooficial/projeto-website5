import '../components/styles/Main.scss';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

export default function Main() {
    return (
        <main className="container">
            <div className="list">
                <div className="list-item">
                    <img src={img1} alt="Imagem 1" />
                    <div className="content">
                        <h2>Bali</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque vitae quaerat voluptates cumque minus
                            odio, natus autem consectetur corrupti exercitationem quidem voluptatibus consequuntur ullam architecto! Minima
                            accusamus tempore ullam.</p>
                        <div className="buttons">
                            <button>Saiba Mais</button>
                            <button>Acessar</button>
                        </div>
                    </div>
                </div>

                <div className="list-item">
                    <img src={img2} alt="Imagem 2" />
                    <div className="content">
                        <h2>Bali</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque vitae quaerat voluptates cumque minus
                            odio, natus autem consectetur corrupti exercitationem quidem voluptatibus consequuntur ullam architecto! Minima
                            accusamus tempore ullam.</p>
                        <div className="buttons">
                            <button>Saiba Mais</button>
                            <button>Acessar</button>
                        </div>
                    </div>
                </div>

                <div className="list-item">
                    <img src={img3} alt="Imagem 3" />
                    <div className="content">
                        <h2>Bali</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque vitae quaerat voluptates cumque minus
                            odio, natus autem consectetur corrupti exercitationem quidem voluptatibus consequuntur ullam architecto! Minima
                            accusamus tempore ullam.</p>
                        <div className="buttons">
                            <button>Saiba Mais</button>
                            <button>Acessar</button>
                        </div>
                    </div>
                </div>

                <div className="list-item">
                    <img src={img4} alt="Imagem 4" />
                    <div className="content">
                        <h2>Bali</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque vitae quaerat voluptates cumque minus
                            odio, natus autem consectetur corrupti exercitationem quidem voluptatibus consequuntur ullam architecto! Minima
                            accusamus tempore ullam.</p>
                        <div className="buttons">
                            <button>Saiba Mais</button>
                            <button>Acessar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
