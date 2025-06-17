import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const mockUser = {
  name: 'John Doe',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
};
const mockBalance = '₹ 10,500.00';
const mockTransactions = [
  {
    name: 'Alice Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    date: '2025-06-15',
    amount: '- ₹500.00',
  },
  {
    name: 'Bob Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    date: '2025-06-14',
    amount: '- ₹1,200.00',
  },
  {
    name: 'Carol Lee',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    date: '2025-06-13',
    amount: '- ₹350.00',
  },
  {
    name: 'David Kim',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    date: '2025-06-12',
    amount: '- ₹800.00',
  },
];

const HomeScreen = () => {
  const userName = mockUser.name;
  const userAvatar = mockUser.avatar;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.username}>{userName}</Text>
        </View>
        <Image source={{ uri: userAvatar }} style={styles.avatar} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Current Balance</Text>
        <Text style={styles.balance}>{mockBalance}</Text>
        <Text style={styles.cardSubtitle}>Updated just now</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsRow}>
          <ActionButton title="Send" />
          <ActionButton title="Receive" />
          <ActionButton title="Top Up" />
          <ActionButton title="Scan" />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        {mockTransactions.map((tx, i) => (
          <View key={i} style={styles.transaction}>
            <Image
              source={{ uri: tx.avatar }}
              style={styles.transactionAvatar}
            />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>{tx.name}</Text>
              <Text style={styles.transactionTime}>{tx.date}</Text>
            </View>
            <Text style={styles.transactionAmount}>{tx.amount}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const ActionButton = ({ title }) => (
  <TouchableOpacity style={styles.actionButton}>
    <Text style={styles.actionText}>{title}</Text>
  </TouchableOpacity>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  greeting: {
    color: '#aaa',
    fontSize: 16,
  },
  username: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#333',
  },
  card: {
    backgroundColor: '#1f2937',
    padding: 20,
    borderRadius: 16,
    marginBottom: 30,
  },
  cardTitle: {
    color: '#bbb',
    fontSize: 14,
  },
  balance: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 4,
  },
  cardSubtitle: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  transactionAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    marginRight: 14,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  transactionTime: {
    color: '#777',
    fontSize: 12,
  },
  transactionAmount: {
    color: '#ef4444',
    fontWeight: '600',
    fontSize: 16,
  },
});
