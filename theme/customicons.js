import { createIcon } from '@chakra-ui/icon';

export const Sun = createIcon({
  displayName: 'Sun',
  viewBox: '0 0 24 24',
  path: (
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
      clipRule='evenodd'
    />
  ),
});

export const Moon = createIcon({
  displayName: 'Moon',
  viewBox: '0 0 24 24',
  path: (
    <path
      fill='currentColor'
      d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'
    />
  ),
});

export const Check = createIcon({
  displayName: 'Check',
  viewBox: '0 0 24 24',
  path: (
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
      clipRule='evenodd'
    />
  ),
});

export const Location = createIcon({
  displayName: 'Location',
  viewBox: '0 0 24 24',
  path: (
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
      clipRule='evenodd'
    />
  ),
});

export const Phone = createIcon({
  displayName: 'Phone',
  viewBox: '0 0 24 24',
  path: (
    <path
      fill='currentColor'
      d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'
    />
  ),
});
