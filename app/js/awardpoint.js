export class AwardPoint {
    total = 0;

    // 200pts - novice
    // 400pts - beginner
    // professional, expert
    reward(len) {
        this.total += len * 5;
    }

}