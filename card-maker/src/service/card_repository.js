import { getDatabase, ref, set, remove, onValue } from "firebase/database";

class CardRepository {
  syncCards(userId, onUpdate) {
    const userRef = ref(getDatabase(), `${userId}/cards`);
    onValue(userRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => userRef.off();
  }

  saveCard(userId, card) {
    set(ref(getDatabase(), `${userId}/cards/${card.id}`), card);
  }
  
  deleteCard(userId, card) {
    const cardRef = ref(getDatabase(), `${userId}/cards/${card.id}`);
    remove(cardRef);
  }
}

export default CardRepository;