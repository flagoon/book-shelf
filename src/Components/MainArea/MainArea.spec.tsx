import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { NoMatch } from '../Common/ErrorPages/404_page';
import Bookshelf from './Bookshelf/Bookshelf';
import MainArea from './MainArea';

describe('MainArea routes', () => {
    it('should render component with valid path', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/bookshelf']}>
                <MainArea showNotification={jest.fn()}/>
            </MemoryRouter>
        );
        expect(wrapper.find(Bookshelf)).toHaveLength(1);
    });

    it('should render NoMatch component, when path is wrong', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/wrongPath']}>
                <MainArea  showNotification={jest.fn()}/>
            </MemoryRouter>
        );
        expect(wrapper.find(NoMatch)).toHaveLength(1);
    });
});
