import MovieDetailsCard from "./MovieDetailsCard";

export default function Modal({ movie }) {
  return (
    <>
      <button
        type="button"
        className="btn h-10 w-full rounded-xl border border-red-500/30 bg-red-500/10 font-bold text-red-200 hover:border-red-500/60 hover:bg-[#e50914] hover:text-white"
        onClick={() =>
          document.getElementById(`modal-${movie?.id}`).showModal()
        }
      >
        View Details
      </button>

      <dialog
        id={`modal-${movie?.id}`}
        className="modal backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <div className="modal-box max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#111116] p-0 text-white shadow-2xl">
          <form method="dialog">
            <button
              type="submit"
              aria-label="Close details"
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10 bg-black/60 text-white hover:bg-black/80"
            >
              ✕
            </button>
          </form>
          <MovieDetailsCard movie={movie} />
        </div>
      </dialog>
    </>
  );
}
