import { fetchNotes } from "@/lib/api";
import NotesClient from "./NotesClient";

const Notes = async () => {
  const initialNotesData = await fetchNotes("", 1);

  return <NotesClient initialNotesData={initialNotesData} />;
};
export default Notes;

// "use client";

// import { useState } from "react";
// import css from "./App.module.css";
// import SearchBox from "../../components/SearchBox/SearchBox";
// import NoteList from "../../components/NoteList/NoteList";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import { fetchNotes } from "../../lib/api";
// import Pagination from "../../components/Pagination/Pagination";
// import NoteModal from "../../components/NoteModal/NoteModal";
// import { useDebounce } from "use-debounce";
// import Loader from "../loading";
// import Error from "../error";

// export default function App() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const [debounsedInputValue] = useDebounce(inputValue, 500);

//   const notes = useQuery({
//     queryKey: ["notes", debounsedInputValue, currentPage],
//     queryFn: () => fetchNotes(debounsedInputValue, currentPage),
//     placeholderData: keepPreviousData,
//   });

//   const totalPages = notes.data?.totalPages ?? 0;

//   const handleSearchChange = (newSearch: string): void => {
//     setInputValue(newSearch);
//     setCurrentPage(1);
//   };

//   return (
//     <div className={css.app}>
//       {notes.isLoading && <Loader />}

//       <header className={css.toolbar}>
//         <SearchBox value={inputValue} onSearch={handleSearchChange} />
//         {totalPages > 0 && (
//           <Pagination
//             totalPages={totalPages}
//             currentPage={currentPage}
//             onPageChange={setCurrentPage}
//           />
//         )}
//         <button onClick={() => setIsModalOpen(true)} className={css.button}>
//           Create note +
//         </button>
//       </header>

//       <NoteList notes={notes.data?.notes ?? []} />
//       {notes.isError && <Error error={notes.error} reset={notes.refetch} />}

//       {isModalOpen && <NoteModal onClose={() => setIsModalOpen(false)} />}
//     </div>
//   );
// }
