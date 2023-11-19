import { IconType } from "react-icons"

export interface PaginationProps {
    totalDePaginas: number,
    currentPage: number,
    handleGoToPage: (page: number) => void,
    handlePreviousPage: () => void,
    handleNextPage: () => void
}

export interface SideBarMenuItem {
    id: string,
    label: string,
    icon: IconType,
    url: string
}

export interface SideBarMenuCard {
    id: string,
    displayName: string,
    photo: string
}

export interface Article {
    _id: number;
    titulo: string;
    subtitulo: string;
}

export interface ArticleProps {
    _id: number
}

export interface LoginProviderProps {
    children: ReactNode;
}