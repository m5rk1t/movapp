import PlayIcon from 'public/icons/play.svg';
import Marker from 'react-mark.js/Marker';
import { AudioPlayer } from 'utils/AudioPlayer';
import { useTranslation } from 'next-i18next';

interface TranslationComponentProps {
  translation: string;
  transcription: string;
  soundUrl: string;
  searchText: string;
}

export const TranslationComponent = ({ transcription, translation, searchText, soundUrl }: TranslationComponentProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center py-2 px-5 bg-primary-grey">
      <div className="w-full">
        <div className="translation_text self-start w-full ">
          {/* Marker is used to highlight searched text */}
          <Marker mark={searchText}>{translation}</Marker>
        </div>
        <p className="text-gray-500">{`[ ${transcription} ]`}</p>
      </div>
      <button onClick={() => AudioPlayer.getInstance().playSrc(soundUrl)} aria-label={t('utils.play') + ' ' + translation}>
        <PlayIcon className="cursor-pointer active:scale-75  stroke-red-500 w-8" />
      </button>
    </div>
  );
};
