import React, { FC, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import {
  useAppDispatch,
  useAppSelector,
} from '../hooks/useTypedRedux';
import { saveThemeMode } from '../store/redusers/uiMode/localStoreActions';
import { switchMode } from '../utils/switchMode';
import { StyledButton } from '../components/Buttons/Button';
import { BackButton } from '../components/Buttons/BackButton';
import { LoadButton } from '../components/Buttons/LoadButton';
import { Container } from '../styles/global';
import { CartButton } from '../components/Buttons/CartButton';
import { currencyFormatter } from '../utils/currencyFormatter';
import { FilterButton } from '../components/Buttons/FilterButton';
import { StyledChip } from '../components/Chip';
import CheckboxInput from '../components/Inputs/CheckboxInput';
import RadioInput from '../components/Inputs/RadioInput';
import { Box } from '../components/Box';
import {
  InputAddress,
  InputField,
  InputMoney,
  InputPromo,
  InputSelect,
  InputTimePicker,
} from '../components/Inputs';
import { InputDatePicker } from '../components/Inputs/ShortInputs/InputDatePicker';
import { StyledItemLabel } from '../components/ItemLabel';
import Category from '../components/Category';
import ComboIcon from '../assets/Icons/ComboIcon';
import { AdditionalItem } from '../views/AdditonalItem';
import { AccordionItem } from '../components/Accordion/AccordionItem';
import { Footer } from '../views/Footer';
import { HeaderHome } from '../views/HeaderHome';
import { Header } from '../views/Header';
import { CategoryWrapper } from '../views/CategoryWrapper';
import { FilterModal } from '../views/FilterModal';

export const DummyPage: FC = () => {
  const { mode } = useAppSelector((state) => state.uiModeSlice);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const [selectedInput, setSelectedInput] = useState<string>('');

  const handleChange = (inputValue: string) => {
    setSelectedInput(inputValue);
  };
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const optionsTest = [
    { value: 'restaurant1', label: 'ул. Бухарестская, 18' },
    { value: 'restaurant2', label: ' пр. Гоголя, 97' },
    { value: 'restaurant3', label: 'просп. Мельникова, 64' },
  ];

  return (
    <>
      <HeaderHome />
      <Header />

      <Container>
        <CategoryWrapper />
        <Box flexDirection='column'>
          <Box
            width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
            height={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
            style={{ backgroundColor: 'red' }}
          />
          <InputField placeholder={'Адрес'} label={'Адрес*'} />
          <StyledButton
            paddingSize={'medium'}
            flexBasis='auto'
            variant={'outline'}
            onClick={() => {
              dispatch(saveThemeMode(switchMode(mode)));
            }}
          >
            Оформить заказ
          </StyledButton>
          <CartButton value={499.89} />
          {i18n.language}
          <BackButton
            onClick={() => {
              console.log('suka');
            }}
          />
          <LoadButton
            onClick={() => {
              console.log('sukas');
            }}
            text='Загрузка'
            loading
          />
          <StyledButton
            paddingSize={'small'}
            onClick={() => {
              changeLanguage('ru');
            }}
          >
            ru
          </StyledButton>
          <StyledButton
            paddingSize={'small'}
            onClick={() => {
              changeLanguage('en');
            }}
          >
            en
          </StyledButton>
          <FilterButton />
          {/* <Tab />*/}
          <StyledButton paddingSize={'small'} fontVariant={'bold'}>
            <span>от&nbsp;</span>
            {currencyFormatter(i18n.language, 44)}
          </StyledButton>
          {/* <CounterButton*/}
          {/*  onChange={(value) => {*/}
          {/*    console.log(value);*/}
          {/*  }}*/}
          {/* />*/}
          <p>{t('description.part2', 'Привет')}</p>
          <p>{t('description.part555', 'Привет')}</p>
          <Trans
            i18nKey='myKey' // optional -> fallbacks to defaults if not provided
            defaults='hello <italic>beautiful</italic> <bold>{{what}}</bold>' // optional defaultValue
            values={{ what: 'world' }}
            components={{ italic: <i />, bold: <strong /> }}
          />
          <StyledChip variant={'outline'}>Хит</StyledChip>
          <InputSelect
            options={optionsTest}
            placeholder={t(
              'base.selectRestaurant',
              'Выберите ресторан',
            )}
          />
          <CheckboxInput name='remember-me' label='Remember Me' />
          <CheckboxInput name='subscribe' label='Subscribe' />
          <RadioInput
            name='option'
            value='option-1'
            label='First Choice'
            isChecked={selectedInput === 'option-1'}
            handleChange={handleChange}
          />
          <RadioInput
            name='option'
            value='option-2'
            label='Second Choice'
            isChecked={selectedInput === 'option-2'}
            handleChange={handleChange}
          />
          <RadioInput
            name='option'
            value='option-3'
            label='Third Choice'
            isChecked={selectedInput === 'option-3'}
            handleChange={handleChange}
          />
          <InputAddress />
          <InputPromo />
          <InputMoney />
          <InputTimePicker />
          <InputDatePicker />
          <StyledItemLabel size={'big'}>NEW</StyledItemLabel>
          <Category description={t('base.sales', 'Акции')}>
            <ComboIcon />
          </Category>
          {/* <ItemCard />*/}
          {/* <BagItemDishSmall />*/}
          {/* <BagItemBig />*/}
          {/* <BottomBar /> */}
          <FilterModal />
          {/* <AdditionalItem /> */}
          {/* <AccordionItem /> */}
          {/* <AccordionItem /> */}
          {/* <AccordionItem /> */}
        </Box>
      </Container>
      <Footer />
    </>
  );
};
