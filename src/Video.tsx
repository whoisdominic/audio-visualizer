import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={2425}
				fps={60}
				width={1080}
				height={1080}
			/>
		</>
	);
};
