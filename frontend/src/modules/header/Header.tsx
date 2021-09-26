import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
export interface HeaderProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	value: string;
}

export const Header = ({ onChange, onClick, value }: HeaderProps) => {
	return (
		<Flex
			height={100}
			alignItems="center"
			justifyContent="space-between"
			backgroundColor="white"
			padding="0 25px"
		>
			<Box fontSize={24}>
				<SearchBar onClick={onClick} onChange={onChange} value={value} />
			</Box>
			<Text fontSize={44} fontWeight="bold">
				Offers
			</Text>
		</Flex>
	);
};
