import React, { useRef } from 'react';
import { AdditionalItem } from '../views/AdditonalItem';
import { RoundButton } from './Buttons/RoundButton';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { container } from '../styles/config';
import { rem } from 'polished';
import {
  useCategoryCartQuery,
  useCategoryQuery,
} from '../@generated/generated.graphql';

const StyledButtonsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-self: center;
  justify-self: center;
  width: ${rem(container.max_container_small + (48 + 30) * 2)};
  margin-left: ${rem(-(48 + 30))};
  top: var(--swiper-navigation-top-offset, 50%);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
`;

const StyledSwiperWrapper = styled.div`
  position: relative;
`;
export const Carousel = () => {
  const swiperRef = useRef<SwiperType>();
  const { data } = useCategoryCartQuery({
    variables: {
      where: {
        id: 'clgthcbkn0004ts8cpl9u89o9',
      },
    },
  });
  return (
    <StyledSwiperWrapper>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data &&
          data.category.goods?.map((item) => (
            <SwiperSlide key={item.id}>
              <AdditionalItem key={item.id} {...item} />
            </SwiperSlide>
          ))}
      </Swiper>
      <StyledButtonsWrapper>
        <RoundButton onClick={() => swiperRef.current?.slidePrev()} />
        <RoundButton
          onClick={() => swiperRef.current?.slideNext()}
          isRightDirection={true}
        />
      </StyledButtonsWrapper>
    </StyledSwiperWrapper>
  );
};
