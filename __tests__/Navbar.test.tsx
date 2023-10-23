import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '@/components/Navbar'; 

describe('Navbar Component', () => {
  it('renders correctly', () => {
    render(<Navbar />);

  
    const homeLink = screen.getAllByText('Home');
    const pagesLink = screen.getByText('Pages');
    const classesLink = screen.getAllByText('Classes');
    const teacherLink = screen.getAllByText('Teacher');
    const blogsLink = screen.getAllByText('Blogs');
  
    homeLink.forEach((homeLink) => {
      expect(homeLink).toBeInTheDocument();
    });
    expect(pagesLink).toBeInTheDocument();
    classesLink.forEach((classesLink) => {
      expect(classesLink).toBeInTheDocument();
    });
    teacherLink.forEach((teacherLink) => {
      expect(teacherLink).toBeInTheDocument();
    });
    blogsLink.forEach((blogsLink) => {
      expect(blogsLink).toBeInTheDocument();
    });
  });

  it('toggles the mobile menu when the mobile button is clicked', () => {
    render(<Navbar />);
    const mobileButton = screen.getByTestId('mobile-button');

    fireEvent.click(mobileButton);

    
    const mobileMenu = screen.getByTestId('mobile-menu');
    expect(mobileMenu).toBeInTheDocument();

    fireEvent.click(mobileButton);

  
  });

  it('toggles the dropdown when the Classes menu item is clicked', () => {
    render(<Navbar />);
    const classesMenuItem = screen.getAllByText('Classes');

    fireEvent.click(classesMenuItem[0]);

    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeInTheDocument();

    fireEvent.mouseEnter(classesMenuItem[0]);
  });
});
