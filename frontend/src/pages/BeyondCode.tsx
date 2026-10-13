import { useEffect, useRef, useState } from "react";
import { personalStories, type PersonalPhoto, type PersonalVideo } from "../data/beyondCode";

type PhotoSelection = { storyId: string; index: number };

function Photo({ photo, thumbnail = false }: { photo: PersonalPhoto; thumbnail?: boolean }) {
  return (
    <img
      src={thumbnail ? photo.smallSrc : photo.src}
      srcSet={`${photo.smallSrc} ${photo.smallWidth}w, ${photo.src} ${photo.width}w`}
      sizes={thumbnail ? "(max-width: 700px) 30vw, 240px" : "(max-width: 700px) 100vw, (max-width: 1000px) 60vw, 760px"}
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      loading="lazy"
      decoding="async"
    />
  );
}

function VideoMoment({ video }: { video: PersonalVideo }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = videoRef.current;
    return () => player?.pause();
  }, [playing]);

  return (
    <div className="moment-video">
      {playing ? (
        <video ref={videoRef} controls autoPlay muted playsInline preload="none" poster={video.poster} width={1280} height={720} aria-label={video.description}>
          <source src={video.src} type="video/mp4" />
          Your browser cannot play this clip. <a href={video.src}>Open the video.</a>
        </video>
      ) : (
        <button type="button" className="video-poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${video.caption}`}>
          <img src={video.poster} alt={video.description} width={1000} height={562} loading="lazy" decoding="async" />
          <span className="video-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="m9 5 11 7-11 7V5Z" /></svg></span>
          <span className="video-poster-label">Watch the moment <span aria-hidden="true">↗</span></span>
        </button>
      )}
    </div>
  );
}

function BeyondCode() {
  const [selection, setSelection] = useState<PhotoSelection | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const viewingPhoto = selection !== null;
  const activeStory = personalStories.find((story) => story.id === selection?.storyId);
  const activePhoto = selection && activeStory?.photos[selection.index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!viewingPhoto || !dialog) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [viewingPhoto]);

  function movePhoto(direction: number) {
    setSelection((previous) => {
      if (!previous) return previous;
      const story = personalStories.find((item) => item.id === previous.storyId);
      if (!story) return previous;
      return { ...previous, index: (previous.index + direction + story.photos.length) % story.photos.length };
    });
  }

  return (
    <>
      <section className="beyond-content" aria-labelledby="beyond-title">
        <div className="section-heading beyond-heading">
          <div>
            <p className="eyebrow section-label">Beyond the code / Ashar Khan</p>
            <h1 className="page-title" id="beyond-title">Away from<br /><em>the keyboard.</em></h1>
          </div>
          <p className="beyond-intro">A few moments from the other side of life. Some high above the ground, some closer to home.</p>
        </div>
        <div className="personal-stories">
          {personalStories.map((story, index) => {
            const coverIndex = Math.max(0, story.photos.findIndex((photo) => photo.id === story.coverPhotoId));
            const cover = story.photos[coverIndex];
            return (
              <article key={story.id} className={`personal-story story-${story.id}${index === 0 ? " story-featured" : ""}`} aria-labelledby={`${story.id}-story-title`}>
                <div className="story-copy">
                  <p className="eyebrow story-category">{story.category}</p>
                  <h3 id={`${story.id}-story-title`}>{story.title}</h3>
                  <p className="story-summary">{story.summary}</p>
                </div>
                <div className="story-media">
                  {story.video ? (
                    <figure>
                      <VideoMoment video={story.video} />
                      <figcaption>{story.video.caption}</figcaption>
                    </figure>
                  ) : cover && (
                    <figure className="story-cover">
                      <button type="button" className="photo-button" onClick={() => setSelection({ storyId: story.id, index: coverIndex })} aria-label={`View photo: ${cover.caption}`}>
                        <Photo photo={cover} />
                        <span className="photo-expand" aria-hidden="true">↗</span>
                      </button>
                      <figcaption>{cover.caption}</figcaption>
                    </figure>
                  )}
                  {story.photos.length > 1 && (
                    <div className="story-thumbnails" aria-label={`More photos: ${story.title}`}>
                      {story.photos.map((photo, photoIndex) => photoIndex !== coverIndex && (
                        <figure key={photo.id}>
                          <button type="button" className="photo-button" onClick={() => setSelection({ storyId: story.id, index: photoIndex })} aria-label={`View photo: ${photo.caption}`}>
                            <Photo photo={photo} thumbnail />
                          </button>
                          <figcaption>{photo.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="photo-dialog"
        aria-label="Photo viewer"
        onClose={() => setSelection(null)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            movePhoto(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        {activePhoto && activeStory && selection && (
          <div className="photo-dialog-content">
            <div className="photo-dialog-heading">
              <span className="eyebrow">{activeStory.category}</span>
              <button type="button" className="photo-close" onClick={() => dialogRef.current?.close()}>Close <span aria-hidden="true">×</span></button>
            </div>
            <img className="photo-dialog-image" src={activePhoto.src} alt={activePhoto.alt} width={activePhoto.width} height={activePhoto.height} />
            <div className="photo-dialog-footer">
              <p>{activePhoto.caption}</p>
              {activeStory.photos.length > 1 && (
                <div className="photo-navigation">
                  <button type="button" onClick={() => movePhoto(-1)} aria-label="Previous photo">←</button>
                  <span aria-live="polite" aria-atomic="true">{selection.index + 1} / {activeStory.photos.length}</span>
                  <button type="button" onClick={() => movePhoto(1)} aria-label="Next photo">→</button>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

export default BeyondCode;
