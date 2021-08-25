import React from "react"
import { IsbnInput } from "../atoms/IsbnInput"
import { IsbnSubmitButton } from "../atoms/IsbnSubmitButton"

export const SearchInputAndButton = () => {
	return (
		<>
			<IsbnInput />
			<IsbnSubmitButton />
		</>
	)
}
