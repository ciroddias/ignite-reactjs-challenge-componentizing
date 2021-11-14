import { Button } from './Button';
import { IGenreResponseProps } from './interfaces/IGenreResponseProps';

interface ISideBarProps {
  genres: IGenreResponseProps[],
  selectedGenreId: number,
  handleClickButton: (id: number) => void
}

export function SideBar(props: ISideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>

  )
}