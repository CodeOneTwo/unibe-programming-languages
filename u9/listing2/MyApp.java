
class MyApp {
    public static void main(String[] args) {
        Double[] mh = new Double[2];
        mh[0] = 100.2;
        mh[1] = 200.2;
        Number[] nm = mh;
        nm[0] = 1000.5;
        System.out.println(nm[0]);
    }
}
