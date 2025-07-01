import TicTacToe from '../components/TicTacToe';

export default function Home() {
  return (
  <main className="flex flex-col items-center justify-center py-10 space-y-8 min-h-screen w-full relative z-10">
  <h1 className="text-4xl font-bold">Deep Space Tic-Tac-Toe</h1>
  <TicTacToe />
  <footer className="mt-10 text-center text-sm text-white opacity-60">
  Made 💫 by <strong>Aniah Brown</strong>
</footer>

</main>


  );
}
