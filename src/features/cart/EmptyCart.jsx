import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="space-y-6 px-8 py-8">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="text-lg font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
