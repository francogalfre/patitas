export default function AdoptedMessage({ name }: { name: string }) {
  return (
    <p className="my-12 text-gray-600 font-raleway text-pretty">
      ¡Buenas noticias! {name} ya está con su nueva familia, listo para vivir
      una vida llena de mimos y aventuras.
    </p>
  );
}
