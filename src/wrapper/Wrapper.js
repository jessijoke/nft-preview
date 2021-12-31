import newImage from '../images/image-equilibrium.jpg'
import ethImage from '../images/icon-ethereum.svg'
import clockImage from '../images/icon-clock.svg'
import Desi from '../images/image-avatar.png'

function Wrapper() {
    return(
        <div className="wrapper">
            <div><img src={newImage} alt="Fancy NFT"/></div>
            <div className="wrapperTitle universalPadding">Equilibrium #3429</div>
            <div className="wrapperDesc universalPadding">Our Equilibrium collection promotes balance and calm.</div>
            <div className="wrapperSpecs universalPadding">
                <div className="cost"><img src={ethImage} alt="I can't type"/>0.041 ETH </div>
                <div className="time"><img src={clockImage} alt="clock"/>3 days left </div>
            </div>
            <div className="wrapperDivider universalPadding"><hr /></div>
            <div className="wrapperCreator universalPadding"><img src={Desi} alt="Actually Desi"/><span>Creation of</span>&nbsp;Jules Wyvern</div>
        </div>
    )
}

export default Wrapper