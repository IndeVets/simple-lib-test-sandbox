import React from 'react'
import { Button as TamaguiButton } from 'tamagui'

export type ButtonProps = {
    title: string,
    onPress: () => void
}

export const Button = ({ title, onPress }: ButtonProps) => {
    return (
        <TamaguiButton onPress={onPress}>{title}</TamaguiButton>
    )
}