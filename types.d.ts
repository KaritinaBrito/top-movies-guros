export interface MovieProps {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface ModalProps {
    id: number,
    poster: string,
    vote_average: number,
    title: string,
    description: string,
    genres: string[],
    handleShowModal: MouseEventHandler<HTMLElement>
}

export interface MovieSingleProps {
    adult: boolean
    backdrop_path: any
    belongs_to_collection: any
    budget: number
    genres: Genre[]
    homepage: string
    id: number
    imdb_id: any
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface GenreProps {
    id: number
    name?: string
}

export interface ProductionCompanyProps {
    id: number
    logo_path: any
    name: string
    origin_country: string
}

export interface ProductionCountryProps {
    iso_3166_1: string
    name: string
}

export interface SpokenLanguageProps {
    english_name: string
    iso_639_1: string
    name: string
}
export interface CardProps {
    id: number,
    poster: string,
    vote_average: number,
    title: string,
    description: string,
    genre_ids?: (string | null | undefined)[];
    handleShowModal?
}

export interface ButtonNextBackProps {
    onclick: MouseEventHandler<HTMLElement>,
    action: string,
}