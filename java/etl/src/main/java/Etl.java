import java.util.List;
import java.util.Map;
import java.util.HashMap;

public class Etl {
    public HashMap<String, Integer> transform(Map<Integer, List<String>> old) {
        HashMap<String, Integer> output = new HashMap<String, Integer>();


        for (Map.Entry<Integer, List<String>> entry : old.entrySet()) {
            for (int i = 0; i < entry.getValue().size(); i++) {

                String key = entry.getValue().get(i).toLowerCase();
                Integer value = entry.getKey();
                output.put(key, value);
            }
        }

        return output;
    }

}
