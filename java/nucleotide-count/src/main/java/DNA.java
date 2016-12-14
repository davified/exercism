public class DNA {
    private String dnaString;
    private char[] dnaArray;
    private int counter;

    public DNA(String string) {
        this.dnaString = string;
        this.dnaArray = dnaString.toCharArray();
    }

    public int count(Character input) {
        int counter = 0;

        for (int i = 0; i < dnaArray.length ; i++) {
            if (dnaArray[i] == input) {
                counter++;
            }
        }

        return counter;
    }
}
