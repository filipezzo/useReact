import { Input } from "../../../components/Input";

export function HeroBlog({ onChangeValue }) {
  const handleChange = (e) => {
    onChangeValue(e.target.value);
  };

  return (
    <div
      className={`bg-react-bg flex h-80 w-full flex-col items-center justify-center gap-4 bg-cover bg-center bg-no-repeat p-4  `}
    >
      <Input
        onChange={handleChange}
        className="w-full max-w-xl"
        placeholder="Buscar publicações"
      />
    </div>
  );
}
