import "../styles/Main.scss";
import { useEffect, useRef } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

function Main() {
  const btnNext = useRef(null);
  const btnBack = useRef(null);
  const container = useRef(null);
  const list = useRef(null);
  const thumb = useRef(null);

  const moveItemsOnclick = (type) => {
    let listItems = list.current.querySelectorAll(".list .list-item");
    let listThumb = thumb.current.querySelectorAll(".thumb .thumb-item");

    if (type === "next") {
      list.current.appendChild(listItems[0]);
      thumb.current.appendChild(listThumb[0]);
      container.current.classList.add("next");
    } else {
      list.current.prepend(listItems[listItems.length - 1]);
      thumb.current.prepend(listThumb[listItems.length - 1]);
      container.current.classList.add("back");
    }

    setTimeout(() => {
      container.current.classList.remove("next");
      container.current.classList.remove("back");
    }, 3000);
  };

  useEffect(() => {
    btnNext.current.onclick = () => moveItemsOnclick("next");
    btnBack.current.onclick = () => moveItemsOnclick("back");
  }, []);

  return (
    <div ref={container} className="container">
      <div ref={list} className="list">
        <div className="list-item">
          <img src={img1} alt="Imagem 1" />
          <div className="content">
            <h2 className="title">Bali</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis doloremque vitae quaerat voluptates cumque minus odio,
              natus autem consectetur corrupti exercitationem quidem
              voluptatibus consequuntur ullam architecto! Minima accusamus
              tempore ullam.
            </p>
            <div className="buttons">
              <button>Saiba Mais</button>
              <button>Acessar</button>
            </div>
          </div>
        </div>

        <div className="list-item">
          <img src={img2} alt="Imagem 2" />
          <div className="content">
            <h2 className="title">Paris</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis doloremque vitae quaerat voluptates cumque minus odio,
              natus autem consectetur corrupti exercitationem quidem
              voluptatibus consequuntur ullam architecto! Minima accusamus
              tempore ullam.
            </p>
            <div className="buttons">
              <button>Saiba Mais</button>
              <button>Acessar</button>
            </div>
          </div>
        </div>

        <div className="list-item">
          <img src={img3} alt="Imagem 3" />
          <div className="content">
            <h2 className="title">Roma</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis doloremque vitae quaerat voluptates cumque minus odio,
              natus autem consectetur corrupti exercitationem quidem
              voluptatibus consequuntur ullam architecto! Minima accusamus
              tempore ullam.
            </p>
            <div className="buttons">
              <button>Saiba Mais</button>
              <button>Acessar</button>
            </div>
          </div>
        </div>

        <div className="list-item">
          <img src={img4} alt="Imagem 4" />
          <div className="content">
            <h2 className="title">Veneza</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis doloremque vitae quaerat voluptates cumque minus odio,
              natus autem consectetur corrupti exercitationem quidem
              voluptatibus consequuntur ullam architecto! Minima accusamus
              tempore ullam.
            </p>
            <div className="buttons">
              <button>Saiba Mais</button>
              <button>Acessar</button>
            </div>
          </div>
        </div>
      </div>
      <div ref={thumb} className="thumb">
        <div className="thumb-item">
          <img src={img1} alt="foto-cidade" />
          <div className="content">
            <h3>Bali</h3>
            <p>Visite Bali</p>
          </div>
        </div>

        <div className="thumb-item">
          <img src={img2} alt="foto-cidade" />
          <div className="content">
            <h3>Paris</h3>
            <p>Visite Paris</p>
          </div>
        </div>

        <div className="thumb-item">
          <img src={img3} alt="foto-cidade" />
          <div className="content">
            <h3>Roma</h3>
            <p>Visite Roma</p>
          </div>
        </div>

        <div className="thumb-item">
          <img src={img4} alt="foto-cidade" />
          <div className="content">
            <h3>Veneza</h3>
            <p>Visite Veneza</p>
          </div>
        </div>
      </div>

      <div className="arrows">
        <button ref={btnBack} className="back"> {"<"} </button>
        <button ref={btnNext} className="next"> {">"} </button>
      </div>
    </div>
  );
}

export default Main;
