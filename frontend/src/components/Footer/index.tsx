// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">App desenvolvido por <a href="https://www.linkedin.com/in/alexandre-dionisio-4a29452a/" target="_blank" rel="noreferrer">Alexandre Dionisio</a></p>
        <p className="text-light"><small><strong>Semana Spring React</strong><br />
      Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
      </div>
    </footer>
  );
}

export default Footer;