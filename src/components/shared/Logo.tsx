import { Link } from 'react-router-dom';
import logo from './img/celare.jpg'

export const Logo = () => {
	return (
		<Link
			to='/'
			className={`text-2xl font-bold tracking-tighter transition-all`}
		>
			<div style={{ display: 'flex', alignItems: 'center' }}>
    <img 
        src={logo} 
        alt="Image" 
        style={{ 
            width: '64px', 
            height: 'auto', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            marginRight: '10px' // Space between image and text
        }} 
    />
    <span>Celare</span>
</div>
			

			<p className='flex text-4xl lg:hidden'>
				<span className='-skew-x-6'>C</span>
				<span className='text-cyan-600 skew-x-6'>L</span>
			</p>
		</Link>
	);
};
