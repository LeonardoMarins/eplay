import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <>
      <Container>
        <div className="container">
          <FooterSection>
            <SectionTitle>Categorias</SectionTitle>
            <Links>
              <li>
                <Link to="/categories#rpg">RPG</Link>
              </li>
              <li>
                <Link to="/categories#sports">Esportes</Link>
              </li>
              <li>
                <Link to="/categories#simulation">Simulação</Link>
              </li>
              <li>
                <Link to="/categories#fight">Luta</Link>
              </li>
              <li>
                <Link to="/categories#action">Ação</Link>
              </li>
            </Links>
          </FooterSection>
          <FooterSection>
            <SectionTitle>Acesso rapido</SectionTitle>
            <Links>
              <li>
                <Link to="/#on-sale">Promoções</Link>
              </li>
              <li>
                <Link to="/#coming-soon">Em breve</Link>
              </li>
            </Links>
          </FooterSection>
          <p>{currentYear}- &copy; E-play todos os direitos reservados</p>
        </div>
      </Container>
    </>
  )
}

export default Footer
