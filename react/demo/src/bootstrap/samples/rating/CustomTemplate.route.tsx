import '@agnos-ui/common/samples/rating/custom.scss';
import {Rating} from '@agnos-ui/react-bootstrap/components/rating';
import type {StarContext} from '@agnos-ui/react-bootstrap/components/rating';

const CustomStar = ({fill, index}: StarContext) => {
	const starClassname = ['star'];
	if (fill === 100) {
		starClassname.push('filled');
	}
	if (index < 3) {
		starClassname.push('bad');
	}
	return <span className={starClassname.join(' ')}>&#9733;</span>;
};
const RatingDemo = () => <Rating className="rating-custom" rating={7} star={CustomStar} ariaLabel="custom rating" />;
export default RatingDemo;
