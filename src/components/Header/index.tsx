import { HeaderBar, LinkItem, Links, LinkCart } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import carrinho from '../../assets/img/carrinho.svg'

const Header = () => {
  return (
    <>
      <HeaderBar>
        <div>
          <Link to={'/'}>
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to={'/categories'}>Categorias</Link>
              </LinkItem>
              <LinkItem>
                <a href="#">Novidades</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Promoções</a>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <div>
          <LinkCart href="#">
            0 - produto(s)
            <img src={carrinho} alt="carrinho" />
          </LinkCart>
        </div>
      </HeaderBar>
    </>
  )
}

export default Header
