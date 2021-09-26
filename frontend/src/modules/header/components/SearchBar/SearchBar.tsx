import { Box, Button, Input } from '@chakra-ui/react';
import { buttonStyles, inputStyles, wrapperStyles } from './SearchBar.styles';
import React, { FC } from 'react';
import { HeaderProps } from '../../Header';

const SearchBar: FC<HeaderProps> = ({ onChange, onClick, value }) => {
	return (
		<Box {...wrapperStyles}>
			<Input
				value={value}
				type="text"
				placeholder="Search"
				onChange={onChange}
				{...inputStyles}
			/>
			<Button {...buttonStyles} onClick={onClick}>
				Find
			</Button>
		</Box>
	);
};
export default SearchBar;
