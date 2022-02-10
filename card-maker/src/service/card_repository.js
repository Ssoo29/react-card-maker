import { getDatabase, ref, set, remove, onValue } from "firebase/database";

class CardRepository {
  syncCards(userId, onUpdate) {
    const db = getDatabase();
    const userRef = ref(db, `${userId}/cards`);
    onValue(userRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => userRef.off();
  }

  saveCard(userId, card) {
    const db = getDatabase();
    set(ref(db, `${userId}/cards/${card.id}`), card);
  }
  
  deleteCard(userId, card) {
    const db = getDatabase();
    const cardRef = ref(db, `${userId}/cards/${card.id}`);
    remove(cardRef);
  }
}

export default CardRepository;