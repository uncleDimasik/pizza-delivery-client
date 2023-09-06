import React, { FC, useState } from 'react';
import { ContainerSmall } from '../styles/global';
import { Box } from '../components/Box';
import { rem } from 'polished';
import { H1 } from '../styles/globalFontStyles';
import Tab from '../components/Tab';
import { HistoryView } from '../views/HistoryView';
import AccountSettingsView from '../views/AccountSettingsView';

const tabs = [
  {
    id: '1',
    name: 'История',
  },
  {
    id: '2',
    name: 'Настойки',
  },
];

export const AccountPage: FC = () => {
  const [viewId, setViewId] = useState('1');
  return (
    <ContainerSmall>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        pb={rem(24)}
        pt={rem(40)}
      >
        <H1>Мой аккаунт</H1>
        <Box width={'100%'} maxWidth={rem(350)}>
          <Tab selectedValue={setViewId} items={tabs} />
        </Box>
      </Box>
      {viewId === '1' ? <HistoryView /> : <AccountSettingsView />}
    </ContainerSmall>
  );
};
