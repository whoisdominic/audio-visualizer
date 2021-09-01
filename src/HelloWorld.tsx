import {Audio, useCurrentFrame, useVideoConfig, Img, random} from 'remotion';
import {useAudioData, visualizeAudio} from '@remotion/media-utils';
import music from './makeAVideoWithReact.m4a';
import profileImage from './3AB724E1-110A-4959-A4AF-E527F428BDE3_1_102_o.jpeg';

export const HelloWorld: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const audioData = useAudioData(music);
	if (!audioData) {
		return null;
	}
	const visualization = visualizeAudio({
		fps,
		frame,
		audioData,
		numberOfSamples: 32,
	});

	return (
		<div
			style={{
				display: 'flex',
				backgroundColor: '#000',
				justifyContent: 'center',
				alignItems: 'center',
				width: 1080,
				height: 1080,
			}}
		>
			<Audio src={music} />
			<Img
				src={profileImage}
				style={{
					position: 'absolute',
					width: 150,
					height: 150,
					borderRadius: 500,
					zIndex: 3,
				}}
			/>
			{visualization.map((item: number, index: number) => {
				return (
					<>
						<div
							style={{
								maxWidth: 250 - Math.floor(random(10)),
								width: 140 + item * 933.33,
								height: 1.5,
								backgroundColor: 'rgba(92, 92, 92, .833)',
								zIndex: 0,
								transform: `rotate(${(360 / visualization.length) * index}deg)`,
								position: 'absolute',
							}}
						/>
						<div
							style={{
								maxWidth: 250 - Math.floor(random(10)),
								width: 140 + item * 1013.33,
								height: 1.5,
								backgroundColor: 'rgba(92, 92, 92, .733)',
								zIndex: 0,
								transform: `rotate(${
									15 + (360 / visualization.length) * index
								}deg)`,
								position: 'absolute',
							}}
						/>
						<div
							style={{
								maxWidth: 250 - Math.floor(random(10)),
								width: 140 + item * 1013.33,
								height: 1.5,
								backgroundColor: 'rgba(92, 92, 92, .533)',
								zIndex: 0,
								transform: `rotate(${
									Math.floor(Math.random() * 10) +
									(360 / visualization.length) * index
								}deg)`,
								position: 'absolute',
							}}
						/>
					</>
				);
			})}
			{visualization.map((item: number, index: number) => {
				return (
					<>
						<div
							style={{
								maxWidth: 250 - Math.floor(random(10)),
								width: 140 + item * 933.33,
								height: 1.5,
								backgroundColor: 'rgba(92, 92, 92, .833)',
								zIndex: 0,
								transform: `rotate(${
									-(360 / visualization.length) * index
								}deg)`,
								position: 'absolute',
							}}
						/>
						<div
							style={{
								maxWidth: 250 - Math.floor(random(10)),
								width: 140 + item * 1013.33,
								height: 1.5,
								backgroundColor: 'rgba(92, 92, 92, .733)',
								zIndex: 0,
								transform: `rotate(${
									-(360 / visualization.length) * index + 15
								}deg)`,
								position: 'absolute',
							}}
						/>
						<div
							style={{
								maxWidth: 250 - Math.floor(random(10)),
								width: 140 + item * 1013.33,
								height: 1.5,
								backgroundColor: 'rgba(92, 92, 92, .533)',
								zIndex: 0,
								transform: `rotate(${
									Math.floor(Math.random() * 10) +
									-(360 / visualization.length) * index
								}deg)`,
								position: 'absolute',
							}}
						/>
					</>
				);
			})}
		</div>
	);
};
