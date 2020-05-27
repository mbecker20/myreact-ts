import React from 'react'
import Button from '../../components/Button/main'
import { useSpring, animated } from 'react-spring'
import colors from '../../appColors'

interface BaseProps {
	isOpen: boolean,
	openWidth: number,
	closedWidth: number,
	openText: string,
	closedText: string,
	onClick: () => void,
	style?: object,
}

interface BaseStyle {
	height: string,
	transform: string,
	position: string,
	backgroundColor: string,
}

const baseStyle: BaseStyle = {
	height: '7vh',
	position: 'absolute',
	transform: 'translate(-50%, -50%)',
	backgroundColor: colors.primary
}

interface BaseTextStyle {
	position: string
}

const baseTextStyle: BaseTextStyle = {
	position: 'absolute'
}

function SideBarButton({ isOpen, openWidth, closedWidth, openText, closedText, onClick, style }: BaseProps) {
	const buttonSpring = useSpring({ width: isOpen ? openWidth - 10 : closedWidth - 10 })
	const closedTextSpring = useSpring({ 
		opacity: isOpen ? 0 : 1,
		transform: isOpen ? 'scaleX(0)' : 'scaleX(1)',
	})
	const openTextSpring = useSpring({ 
		opacity: isOpen ? 1 : 0,
		transform: isOpen ? 'scaleX(1)' : 'scaleX(0)',
	})

	const baseStyleCopy = Object.assign({}, baseStyle)
	const baseTextStyleCopy = Object.assign({}, baseTextStyle)
	return (
		<Button style={Object.assign(buttonSpring, Object.assign(baseStyleCopy, style))} onClick={onClick}>
			<animated.text style={Object.assign(closedTextSpring, baseTextStyleCopy)}>{closedText}</animated.text>
			<animated.text style={Object.assign(openTextSpring, baseTextStyleCopy)}>{openText}</animated.text>
		</Button>
	)
}

export default SideBarButton