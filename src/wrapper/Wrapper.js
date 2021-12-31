import newImage from '../images/image-equilibrium.jpg'
import ethImage from '../images/icon-ethereum.svg'
import clockImage from '../images/icon-clock.svg'
import Desi from '../images/image-avatar.png'

function Wrapper() {
    return(
        <div className="wrapper">
            <div className='wrapperImage'><img src={newImage} alt="Fancy NFT"/></div>
            <div className="wrapperTitle universalPadding">Equilibrium #3429</div>
            <div className="wrapperDesc universalPadding">Our Equilibrium collection promotes balance and calm.</div>
            <div className="wrapperSpecs universalPadding">
                <div className="cost"><img src={ethImage} alt="I can't type"/><div className='specsSpan'>0.041 ETH </div></div>
                <div className="time"><img src={clockImage} alt="clock"/><div className='specsSpan'>3 days left</div></div>
            </div>
            <div className="wrapperDivider universalPadding"><hr /></div>
            <div className="wrapperCreator universalPadding"><img src={Desi} alt="Actually Desi"/><span>Creation of</span>&nbsp;Jules Wyvern</div>
        </div>
    )
}

export default Wrapper