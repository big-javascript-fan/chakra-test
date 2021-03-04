import React from 'react'
import {
  Box,
  Image,
  Badge,
  Divider,
  Heading,
  Text,
} from '@chakra-ui/react';

import {
  StarIcon,
  Icon
} from '@chakra-ui/icons';
import FavBlankIcon from './fav_blank.svg';
import FavSelectedIcon from './fav_selected.svg';
import AvatarIcon from './avatar.png';

const Profile = () => {
  const [favourite, setFavourite] = React.useState(false);

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box d="flex" paddingStart={35} pt={30} pb={25} fontSize={'2xl'} justifyContent={'space-between'} pe={26}>
        Developer Profile
        <Image cursor="pointer" src={favourite?FavSelectedIcon:FavBlankIcon} onClick={() => setFavourite(!favourite) } />
      </Box>
      <Divider />
      <Box d="flex" alignItems="center" justifyContent="center" flexDirection="column" pt="10" pb="9">
        <Image borderRadius="50%" src={AvatarIcon}/>
        <Heading fontSize="1xl" paddingTop="3">My Name</Heading>
        <Text fontSize="sm" color="gray.600" >Your title</Text>
        <Text fontSize="sm" color="gray.600" >City, Country</Text>
      </Box>
      <Divider />
      <Box p="6" d="flex" justifyContent="space-around" alignItems="center">
        <Box>
          <Heading fontSize="1xl">1,234</Heading>
          <Text color="gray.600" fontSize="xs" mt="1">Profile Views</Text>
        </Box>
        <Box>
          <Heading fontSize="1xl">5,678</Heading>
          <Text color="gray.600" fontSize="xs" mt="1">Website Views</Text>
        </Box>
        <Box alignItems="center">
          <Box d="flex" h="6" pt="1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  ml="1"
                  boxSize={13}
                  color={i < 4 ? "gray.500" : "gray.100"}
                />
              ))}
          </Box>
          <Text color="gray.600" fontSize="xs" mt="1">
            Avg.Rating
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Profile;